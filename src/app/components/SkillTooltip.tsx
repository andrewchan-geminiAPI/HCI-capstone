interface Owner {
  name: string;
  role: string;
}

interface Props {
  skill: string;
  description: string;
  owners: Owner[];
  direction?: "below" | "above";
}

export function SkillTooltip({ skill, description, owners, direction = "below" }: Props) {
  const pos = direction === "below" ? "top-full mt-1" : "bottom-full mb-1";
  return (
    <div className={`absolute ${pos} left-0 w-[210px] z-[100] pointer-events-none`}>
      <div className="bg-[rgba(255,255,255,0.97)] border border-[#d1d5dc] rounded-[10px] p-[13px] flex flex-col gap-[7px] shadow-md">
        <div className="inline-flex self-start items-center px-[8px] py-[3px] bg-white border border-[#d1d5dc] rounded-full">
          <p className="font-['Instrument_Sans',sans-serif] font-medium text-[#364153] text-[10px] whitespace-nowrap">{skill}</p>
        </div>
        <p className="font-['Instrument_Sans',sans-serif] text-[11px] leading-[15px] text-[#4a5565]">{description}</p>
        {owners.map((o, i) => (
          <div key={i}>
            <p className="font-['Instrument_Sans',sans-serif] font-semibold text-[12px] leading-[17px] text-[#101828]">{o.name}</p>
            <p className="font-['Instrument_Sans',sans-serif] text-[11px] leading-[15px] text-[#4a5565]">{o.role}</p>
          </div>
        ))}
        <div className="flex items-center gap-[4px]">
          <p className="font-['Instrument_Sans',sans-serif] text-[10px] text-[#a1a1aa] whitespace-nowrap">Find others with this skill</p>
          <svg className="size-[10px] flex-shrink-0" fill="none" viewBox="0 0 10 10">
            <path d="M6.25 1.25H8.75V3.75" stroke="#A1A1AA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d="M4.16667 5.83333L8.75 1.25" stroke="#A1A1AA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d="M1.25 8.75H8.75V5" stroke="#A1A1AA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}
