import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Month 1", leads: 12 },
  { month: "Month 2", leads: 18 },
  { month: "Month 3", leads: 28 },
  { month: "Month 4", leads: 42 },
  { month: "Month 5", leads: 61 },
  { month: "Month 6", leads: 85 },
];

const VisibilityGraphSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 bg-seconday/5">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Visibility Drives Growth
          </h2>

          <p className="text-lg text-muted-foreground">
            When more people discover your business, more opportunities enter
            your pipeline. Visibility isn't a branding expense—it's a growth
            engine.
          </p>
        </div>

        {/* Chart Card */}
        <div className="rounded-2xl border bg-background p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              Qualified Leads Over Time
            </h3>

            <p className="text-sm text-muted-foreground">
              Example growth pattern after improving market visibility.
            </p>
          </div>

          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="leads"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Benefits */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-6">
            <h4 className="mb-2 text-lg font-semibold">
              More Visibility
            </h4>

            <p className="text-muted-foreground">
              Reach customers who are actively searching for solutions like
              yours.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h4 className="mb-2 text-lg font-semibold">
              More Qualified Leads
            </h4>

            <p className="text-muted-foreground">
              Generate inquiries from people already interested in your
              services.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h4 className="mb-2 text-lg font-semibold">
              More Revenue Growth
            </h4>

            <p className="text-muted-foreground">
              Convert increased demand into sustainable business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisibilityGraphSection;