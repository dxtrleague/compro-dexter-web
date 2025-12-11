import type { Metadata } from 'next';
import PortfolioPage from './(components)/PortfolioPage';
import TellUs from "@/components/layouts/TellUs";

export const metadata: Metadata = {
  title: 'Portfolio - Dexter League',
  description: 'Lihat proyek-proyek yang telah kami kerjakan, dari pengembangan web hingga aplikasi mobile dan solusi digital lainnya.',
};

export default function Portfolio() {
  return (
    <div>
      <PortfolioPage />
            <div className="w-full bg-slate-100">
                <div className="container py-24 px-6 mx-auto">
                    <TellUs />
                </div>
            </div>
    </div>
  );
}