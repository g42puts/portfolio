import { Dispatch, SetStateAction, useState } from "react";

import { Certificados } from "@/libs/certificados";

export interface ICertificados {
  name: string;
  img: string;
  org: string;
}

function OpenFullImage({
  props,
  showImage,
  setShowImage,
}: {
  props: ICertificados;
  showImage: { [x: string]: boolean };
  setShowImage: Dispatch<SetStateAction<{ [x: string]: boolean }>>;
}) {
  return (
    <div onClick={() => setShowImage({ ...showImage, [props.name]: !showImage[props.name] })} className="fixed z-50 bg-opacity-70 bg-black inset-0 duration-1000">
      <div onClick={(event) => event.stopPropagation()} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-50 bg-white rounded-xl max-w-[600px] w-full">
        <img src={props.img} alt={props.name} />
        <div className="flex items-center justify-center p-2">
          <span className="text-sm font-semibold tracking-wider whitespace-normal text-center text-gray-700">{props.name}</span>
        </div>
      </div>
    </div>
  );
}

const CertificatesSection = () => {
  const [showImage, setShowImage] = useState(() => (
    Certificados.reduce((acc, item) => {
      acc[item.name] = false;
      return acc;
    }, {} as { [x: string]: boolean })
  ));

  return (
    <section
      id="certificates"
      className="py-10 sm:p-5 p-4 m-auto max-w-[1100px]"
    >
      <div className="flex flex-col justify-center gap-10 max-w-[1100px]">
        <h4 className="float-left left-0 text-2xl mt-4 mb-2 py-10 text-center font-bold tracking-widest">Certificados</h4>
        <div className="flex sm:w-full w-full flex-row flex-wrap items-center sm:justify-around justify-center gap-6">
          {Certificados.map((item) => (
            <div key={item.name} className="flex flex-col max-w-60">
              <img src={item.img} className="w-60 h-40 object-fill object-center rounded-t-md" onClick={() => setShowImage({ ...showImage, [item.name]: !showImage[item.name] })} alt={item.name} />
              {showImage[item.name] && <OpenFullImage showImage={showImage} setShowImage={setShowImage} props={item} />}
              <div className="flex justify-center w-full overflow-hidden">
                <span className="h-16 text-sm font-semibold tracking-wider whitespace-normal text-center">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export { CertificatesSection };