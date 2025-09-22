import Button from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ArrowRight } from "lucide-react";
import ficon from "../../assets/svg/Ficon.png";

const Platforms = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero split: left Ficon image, right heading */}
      <div className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left: Ficon image with 3D effect */}
        <div className="lg:col-span-1 flex items-center justify-center">
          <div 
            className="w-full max-w-md h-auto perspective-1000"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            <img
              src={ficon}
              alt="FINFX Logo"
              className="w-full h-auto object-contain"
              style={{
                transformStyle: 'preserve-3d',
                filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'rotateY(15deg) rotateX(10deg) scale(1.1)';
                e.target.style.filter = 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.4))';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
                e.target.style.filter = 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))';
              }}
            />
          </div>
        </div>

        {/* Right: heading block aligned right */}
        <div className="lg:col-span-2 text-right">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-6 text-white">
            Platforms & <span className="text-teal-400">Integrations</span>
        </h1>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-none">
            We provide seamless integrations with industry‑leading trading platforms and vendor bridges.
        </p>
        </div>
      </div>

      {/* Collage Layout - Left large card, right two smaller cards stacked */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
        {/* Left: Large card */}
        <div className="lg:col-span-1">
          <Card className="bg-card/50 backdrop-blur-sm border-border h-full">
            <CardHeader>
              <CardTitle>MetaTrader 4 (MT4)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A widely used Forex trading & EA platform (forex-first, algorithmic trading, market of indicators). Use MT4 when you want mature forex-focused support.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right: Two smaller cards stacked */}
        <div className="lg:col-span-2 space-y-6">
          {/* Top right card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle>MetaTrader 5 (MT5)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                MetaQuotes' multi-asset next-gen platform (stocks, futures, FX, more order types and Market Depth features). Use MT5 when the broker/exchange needs multi-asset/exchange-grade features.
              </p>
            </CardContent>
          </Card>

          {/* Bottom right card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle>DXtrade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A modern multi-asset trading platform stack for brokers and banks with quick time-to-market and built-in risk tools; often used by brokers that want a branded web + mobile offering.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Integration Methods</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We offer flexible integration options to connect your systems with our infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="bg-card/50 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle>FIX & Vendor APIs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Institutional integrations commonly use the FIX protocol and platform APIs/bridges for order/exec and liquidity connectivity. We provide a technical onboarding checklist and test plan.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle>Managed Bridges</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We offer managed bridges to liquidity providers, ensuring reliable and low-latency connectivity.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button variant="hero" size="lg">
          <Download className="mr-2 w-5 h-5" />
          Download Integration Spec
        </Button>
      </div>
    </div>
    </section>
  );
};

export default Platforms;