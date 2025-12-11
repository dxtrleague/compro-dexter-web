import Services from "./(components)/ServicesHeader";
import TellUs from "@/components/layouts/TellUs";

export default function ServicesPage() {
  return (
    <div>
      <Services />
      <div className="w-full bg-slate-100">
                      <div className="container py-24 px-6 mx-auto">
                          <TellUs />
                      </div>
                  </div>
    </div>
  );
}