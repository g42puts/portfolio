export interface ITools {
  name: string;
  stars: number;
  svg: string;
}

export default function SkillsContainer({
  h4Text,
  Items
}: {
  h4Text: string;
  Items: ITools[];
}) {
  return (
    <section
      id="habilidades"
      className="py-10 sm:p-5 p-4">
      <div className="flex flex-col justify-center gap-10 max-w-[1100px] m-auto">
        <div className="flex flex-col items-center">
          <h4 className="float-left left-0 text-2xl mt-4 mb-2 py-10 text-center font-bold tracking-widest">{h4Text}</h4>
          <div className="flex flex-row sm:justify-center justify-center flex-wrap [&_img]:size-20 sm:gap-12 gap-6">
            {Items.sort((a, b) => b.stars - a.stars).map((item, index) => (
              <div key={index} className="flex flex-col group">
                <i className="p-4 bg-slate-50 rounded-t-2xl shadow-md shadow-slate-300 group-hover:shadow-2xl group-hover:shadow-slate-300 duration-300">
                  <img src={item.svg} alt={item.name} />
                </i>
                <div className="flex flex-col m-auto px-2 pb-2 bg-slate-800 rounded-b-md group-hover:-translate-y-2 w-[90%] duration-300 rounded-md">
                  <span className="text-center text-white font-semibold py-1 bg-slate-800">{item.name}</span>
                  {/* <div className="flex flex-row">
                  {renderStars(item.stars)}
                </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}