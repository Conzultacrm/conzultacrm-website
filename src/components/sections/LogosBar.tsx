import Image from "next/image";

const zohoProducts = [
  { name: "CRM", color: "#E61E25" },
  { name: "Desk", color: "#F28A30" },
  { name: "Projects", color: "#009DD9" },
  { name: "SalesIQ", color: "#00BFA5" },
  { name: "Social", color: "#7B68EE" },
  { name: "Analytics", color: "#FF6B35" },
  { name: "Survey", color: "#4CAF50" },
  { name: "Marketing", color: "#E91E63" },
];

export default function LogosBar() {
  return (
    <section className="py-10 border-y border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Label */}
          <div className="flex-shrink-0 text-center md:text-left">
            <p
              className="text-neutral-500 text-sm font-medium max-w-[160px]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Ecosistema Zoho CRM Plus incluido
            </p>
          </div>

          <div className="w-px h-10 bg-neutral-200 hidden md:block" />

          {/* Zoho product chips */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 flex-1">
            {zohoProducts.map((product) => (
              <div
                key={product.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-colors"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: product.color }}
                />
                <span
                  className="text-sm font-semibold text-neutral-700"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Zoho {product.name}
                </span>
              </div>
            ))}
          </div>

          <div className="w-px h-10 bg-neutral-200 hidden md:block" />

          {/* Zoho partner badge */}
          <div className="flex-shrink-0">
            <Image
              src="/logos/zoho-partner.png"
              alt="Zoho Authorized Partner"
              width={140}
              height={46}
              className="h-10 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
