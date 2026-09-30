// Document-style section: numbered label on the left, heading and content on the right.
export default function Section({ id, no, label, title, intro, children }) {
  return (
    <section id={id} className="border-rule pt-10 pb-12 md:pt-14 md:pb-16 [section+&]:border-t">
      <div className="wrap grid grid-cols-1 gap-5 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
        <p className="caps-label pt-3.5 text-silver-mid">
          <span className="mr-2.5 text-steel">{no}</span>{label}
        </p>
        <div>
          <h2 className="max-w-[18ch] font-serif text-[clamp(34px,4.4vw,56px)] leading-[1.05] font-normal tracking-[-0.015em] [&_em]:text-white">
            {title}
          </h2>
          {intro && <p className="mt-[18px] mb-10 max-w-[62ch] text-[17px] text-silver-mid">{intro}</p>}
        </div>
        <div className="hidden lg:block" />
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
