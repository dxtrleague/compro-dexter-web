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
      <TellUs />
    </div>
  );
}