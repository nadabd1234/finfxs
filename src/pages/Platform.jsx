import Button from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ArrowRight } from "lucide-react";

const Platforms = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-foreground">Platforms & </span>
          <span className="bg-gradient-primary bg-clip-text text-transparent">Integrations</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We provide seamless integration with industry-leading trading platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="bg-card/50 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle>MetaTrader 4 (MT4)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A widely used Forex trading & EA platform (forex-first, algorithmic trading, market of indicators). Use MT4 when you want mature forex-focused support.
            </p>
          </CardContent>
        </Card>
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
  );
};

export default Platforms;