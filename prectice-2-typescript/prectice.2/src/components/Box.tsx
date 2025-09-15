import type { ChangeEvent, Dispatch, SetStateAction } from "react";

type inputexpo = string | number | readonly string[] | undefined;

const Box = <T extends inputexpo,>({
  label,
  value,
  setter,
}: {
  label: string;
  value: T;
  setter: Dispatch<SetStateAction<T>>;
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let v: unknown = e.target.value;
    if (typeof value === "number") {
      const n = Number(e.target.value);
      v = Number.isNaN(n) ? 0 : n;
    } else if (Array.isArray(value)) {
      v = e.target.value.split(",");
    }
    setter(v as T);
  };

  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col items-center gap-2">
        <label className="text-center font-semibold">{label}</label>
        <input type="text" value={value as T} onChange={handleChange} className="text-center" />
      </form>
    </div>
  );
};

export default Box;