import Link from "next/link";

function QuizHomeModal({ setOpenModal }: { setOpenModal: Function }) {
  return (
    <div
      tabIndex={-1}
      className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-start w-full md:inset-0 h-[calc(100%)] max-h-full bg-[#0909387a]"
    >
      <div className="relative  w-full max-w-md max-h-full mt-[15vh]">
        <div className="relative bg-white rounded-lg shadow  h-[200px] md:w-[400px] md:h-[230px] lg:w-[500px] lg:h-[250px] flex flex-col justify-center items-center gap-4 lg:gap-6 ">
          <div className="  mb1 lg:w-[300px] text-center lg:h-[50px] lg:flex lg:items-center lg:justify-center">
            <Link href="/">वेबसाइट पर वापस जाएँ</Link>
          </div>
          <div
            className="mb2 lg:w-[280px] text-center  lg:h-[50px] lg:flex lg:items-center lg:justify-center "
            onClick={() => setOpenModal(false)}
          >
            क्विज़ खेलना जारी रखें
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizHomeModal;
