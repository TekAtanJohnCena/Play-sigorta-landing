"use client";

import { TrendingUp, Clock, Target, Users, ArrowUpRight, Sparkles } from "lucide-react";

const stats = [
  { label: "Toplam Prim", value: "₺847K", change: "+12.3%", trend: "up", color: "blue" },
  { label: "Aktif Poliçe", value: "1.247", change: "+8", trend: "up", color: "emerald" },
  { label: "Yaklaşan Vade", value: "23", change: "7 gün", trend: "neutral", color: "amber" },
  { label: "Çapraz Satış", value: "41", change: "+15", trend: "up", color: "purple" },
];

const renewals = [
  { name: "Mehmet Kaya", policy: "Kasko", date: "2 gün", amount: "₺12.450", priority: "high" },
  { name: "Ayşe Yılmaz", policy: "DASK", date: "5 gün", amount: "₺890", priority: "medium" },
  { name: "Ahmet Demir", policy: "Trafik", date: "7 gün", amount: "₺2.140", priority: "medium" },
  { name: "Zeynep Şahin", policy: "Sağlık", date: "9 gün", amount: "₺8.750", priority: "low" },
];

const opportunities = [
  { name: "Can Öztürk", has: "Kasko", missing: "DASK", potential: "₺980", score: 92 },
  { name: "Elif Arslan", has: "Trafik", missing: "Kasko", potential: "₺11.2K", score: 88 },
  { name: "Burak Çelik", has: "Konut", missing: "DASK", potential: "₺1.450", score: 85 },
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: "from-blue-500 to-blue-600",
    emerald: "from-emerald-500 to-emerald-600",
    amber: "from-amber-500 to-amber-600",
    purple: "from-purple-500 to-purple-600",
  };
  return colors[color as keyof typeof colors];
};

export function DashboardMockup() {
  return (
    <div className="w-full space-y-4 bg-gradient-to-br from-slate-50 to-slate-100/50 p-5 md:p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[15px] font-bold text-slate-900">Dashboard</h2>
          <p className="text-[11px] text-slate-500">Bugünün özeti</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
      </div>

      {/* Stats Grid - Modern Cards */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="group relative overflow-hidden rounded-xl border border-white/60 bg-white p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className={`absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${getColorClasses(stat.color)} opacity-[0.08] transition-all duration-500 group-hover:scale-125 group-hover:opacity-[0.15]`} />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {stat.label}
                </span>
                {stat.trend === "up" && (
                  <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.5} />
                )}
              </div>
              <p className="mt-2 text-[22px] font-bold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-[10px] font-semibold text-emerald-600">{stat.change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content - Premium Layout */}
      <div className="grid gap-4 lg:grid-cols-5">
        {/* Renewals - Large Card */}
        <div className="group overflow-hidden rounded-xl border border-white/60 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10 lg:col-span-3">
          <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[13px] font-bold text-slate-900">Yaklaşan Yenilemeler</h3>
                <p className="text-[10px] text-slate-500">Öncelikli 4 poliçe</p>
              </div>
              <button className="rounded-lg bg-blue-50 px-3 py-1.5 text-[10px] font-semibold text-blue-700 transition-colors hover:bg-blue-100">
                Tümü
              </button>
            </div>
          </div>
          <div className="divide-y divide-slate-100 p-4">
            {renewals.map((item, i) => (
              <div key={i} className="group/item flex items-center justify-between rounded-lg py-3 transition-all duration-200 first:pt-0 last:pb-0 hover:bg-blue-50/50 hover:px-3 hover:-mx-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-[11px] font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-lg group-hover/item:shadow-blue-500/30">
                      {item.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    {item.priority === "high" && (
                      <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-red-500" />
                    )}
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-slate-900">{item.name}</p>
                    <div className="mt-0.5 flex items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-semibold text-slate-600">
                        {item.policy}
                      </span>
                      <span className="text-[10px] text-slate-500">• {item.date}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[14px] font-bold text-slate-900">{item.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunities - Compact Card */}
        <div className="group overflow-hidden rounded-xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50 to-white shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10 lg:col-span-2">
          <div className="border-b border-emerald-100 bg-gradient-to-r from-emerald-100 to-emerald-50 px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[13px] font-bold text-emerald-900">Satış Fırsatları</h3>
                <p className="text-[10px] text-emerald-700">Yüksek potansiyel</p>
              </div>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">
                {opportunities.length}
              </span>
            </div>
          </div>
          <div className="space-y-2.5 p-4">
            {opportunities.map((item, i) => (
              <div key={i} className="group/opp cursor-pointer rounded-lg border border-emerald-200 bg-white p-3 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-emerald-400 hover:shadow-md hover:shadow-emerald-500/20">
                <div className="flex items-start justify-between">
                  <p className="text-[12px] font-bold text-slate-900 transition-colors group-hover/opp:text-emerald-900">{item.name}</p>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold text-emerald-700 transition-all group-hover/opp:bg-emerald-600 group-hover/opp:text-white">
                    {item.score}%
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="truncate rounded-md bg-slate-100 px-2 py-1 text-[9px] font-semibold text-slate-700">
                    {item.has}
                  </span>
                  <svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="truncate rounded-md bg-emerald-100 px-2 py-1 text-[9px] font-semibold text-emerald-800">
                    {item.missing}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-[13px] font-bold text-emerald-700 transition-colors group-hover/opp:text-emerald-800">{item.potential}</p>
                  <svg className="h-4 w-4 text-emerald-600 opacity-0 transition-all group-hover/opp:translate-x-0 group-hover/opp:opacity-100 -translate-x-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bar - Live Status */}
      <div className="flex items-center justify-between rounded-lg border border-white/60 bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </div>
          <span className="text-[11px] font-medium text-slate-600">Canlı veri akışı</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-medium text-slate-500">
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            1.247
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            23
          </span>
          <span className="flex items-center gap-1">
            <Target className="h-3 w-3" />
            41
          </span>
        </div>
      </div>
    </div>
  );
}
