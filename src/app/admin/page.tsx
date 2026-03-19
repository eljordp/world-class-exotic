import { kv } from "@vercel/kv";
import Link from "next/link";

interface BookingRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  age?: string;
  vehicle: string;
  carName: string;
  dailyRate: number;
  days: number;
  subtotal: number;
  deliveryFee: number;
  deposit: number;
  total: number;
  pickupDate: string;
  returnDate: string;
  delivery: boolean;
  deliveryAddress?: string | null;
  serviceType?: string;
  needsInsurance?: boolean;
  notes?: string | null;
  licenseUrl?: string | null;
  insuranceUrl?: string | null;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: string;
}

function fmt(n: number) {
  return "$" + n.toLocaleString("en-US");
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function isThisWeek(iso: string) {
  const d = new Date(iso);
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  return d >= weekAgo && d <= now;
}

function StatusBadge({ status }: { status: BookingRecord["status"] }) {
  const styles: Record<string, string> = {
    pending: "bg-yellow-500/20 text-yellow-400",
    confirmed: "bg-green-500/20 text-green-400",
    cancelled: "bg-red-500/20 text-red-400",
  };
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-medium capitalize ${styles[status] ?? "bg-gray-500/20 text-gray-400"}`}
    >
      {status}
    </span>
  );
}

export default async function AdminPage() {
  let bookings: BookingRecord[] = [];

  try {
    const ids = await kv.lrange("bookings:index", 0, -1);
    const raw = await Promise.all(
      ids.map((id) => kv.get(`booking:${id}`) as Promise<BookingRecord | null>)
    );
    bookings = (raw.filter(Boolean) as BookingRecord[]).sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  } catch {
    // KV not configured — show empty state
  }

  // Stats
  const totalBookings = bookings.length;
  const pending = bookings.filter((b) => b.status === "pending").length;
  const thisWeek = bookings.filter((b) => isThisWeek(b.createdAt)).length;
  const revenue = bookings.reduce((sum, b) => sum + (b.total ?? 0), 0);

  const stats = [
    { label: "Total Bookings", value: String(totalBookings) },
    { label: "Pending", value: String(pending) },
    { label: "This Week", value: String(thisWeek) },
    { label: "Revenue", value: fmt(revenue) },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Top bar */}
      <div className="border-b border-[#222] px-6 py-4 flex items-center justify-between">
        <h1
          className="text-2xl text-[#C9A84C]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          WCE Admin
        </h1>
        <a
          href="/api/admin/logout"
          className="text-sm text-[#888] hover:text-white transition-colors"
        >
          Logout
        </a>
      </div>

      <div className="px-6 py-8 max-w-7xl mx-auto">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#111] border border-[#222] rounded-lg p-5"
            >
              <p className="text-xs text-[#888] mb-1">{s.label}</p>
              <p
                className="text-2xl font-semibold text-[#C9A84C]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Bookings */}
        <div className="bg-[#111] border border-[#222] rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-[#222]">
            <h2 className="text-sm font-semibold text-[#888] uppercase tracking-widest">
              Bookings
            </h2>
          </div>

          {bookings.length === 0 ? (
            <div className="px-6 py-16 text-center text-[#555]">
              No bookings yet — they&apos;ll appear here when customers book.
            </div>
          ) : (
            <>
              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#222] text-[#555] text-xs uppercase tracking-wider">
                      <th className="px-4 py-3 text-left font-medium">Date</th>
                      <th className="px-4 py-3 text-left font-medium">Customer</th>
                      <th className="px-4 py-3 text-left font-medium">Vehicle</th>
                      <th className="px-4 py-3 text-left font-medium">Dates</th>
                      <th className="px-4 py-3 text-left font-medium">Total</th>
                      <th className="px-4 py-3 text-left font-medium">Deposit</th>
                      <th className="px-4 py-3 text-left font-medium">Status</th>
                      <th className="px-4 py-3 text-left font-medium">Docs</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((b) => (
                      <tr
                        key={b.id}
                        className="border-b border-[#1A1A1A] hover:bg-[#111] transition-colors"
                      >
                        <td className="px-4 py-3 text-[#888] whitespace-nowrap">
                          {formatDate(b.createdAt)}
                        </td>
                        <td className="px-4 py-3">
                          <Link
                            href={`/admin/booking/${b.id}`}
                            className="font-medium hover:text-[#C9A84C] transition-colors"
                          >
                            {b.name}
                          </Link>
                          <div className="text-xs text-[#888] mt-0.5">{b.phone}</div>
                        </td>
                        <td className="px-4 py-3 text-white whitespace-nowrap">
                          {b.carName}
                        </td>
                        <td className="px-4 py-3 text-[#888] whitespace-nowrap text-xs">
                          {b.pickupDate} → {b.returnDate}
                        </td>
                        <td className="px-4 py-3 text-[#C9A84C] font-medium whitespace-nowrap">
                          {fmt(b.total)}
                        </td>
                        <td className="px-4 py-3 text-[#888] whitespace-nowrap">
                          {fmt(b.deposit)}
                        </td>
                        <td className="px-4 py-3">
                          <StatusBadge status={b.status} />
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            {b.licenseUrl && (
                              <a
                                href={b.licenseUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-[#888] hover:text-white transition-colors"
                                title="Driver's License"
                              >
                                📄 License
                              </a>
                            )}
                            {b.insuranceUrl && (
                              <a
                                href={b.insuranceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-[#888] hover:text-white transition-colors"
                                title="Insurance Card"
                              >
                                📋 Insurance
                              </a>
                            )}
                            {!b.licenseUrl && !b.insuranceUrl && (
                              <span className="text-xs text-[#333]">—</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden divide-y divide-[#1A1A1A]">
                {bookings.map((b) => (
                  <div key={b.id} className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <Link
                          href={`/admin/booking/${b.id}`}
                          className="font-medium hover:text-[#C9A84C] transition-colors"
                        >
                          {b.name}
                        </Link>
                        <div className="text-xs text-[#888] mt-0.5">{b.phone}</div>
                      </div>
                      <StatusBadge status={b.status} />
                    </div>
                    <div className="text-sm text-[#888] mb-1">{b.carName}</div>
                    <div className="text-xs text-[#555] mb-2">
                      {b.pickupDate} → {b.returnDate}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[#C9A84C] font-medium">{fmt(b.total)}</span>
                        <span className="text-xs text-[#555] ml-2">
                          deposit {fmt(b.deposit)}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {b.licenseUrl && (
                          <a
                            href={b.licenseUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[#888]"
                          >
                            📄
                          </a>
                        )}
                        {b.insuranceUrl && (
                          <a
                            href={b.insuranceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[#888]"
                          >
                            📋
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="text-xs text-[#555] mt-1">
                      Booked {formatDate(b.createdAt)}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
