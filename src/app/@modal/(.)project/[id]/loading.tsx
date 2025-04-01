import { Root } from "@/components/Common/Modal";
import ProjectModal from "@/components/Project/ProjectModal";

const Loading = () => {
  const skeleton = "bg-(--skeleton-color) rounded-[15px]"

  return (
    <Root>
      <ProjectModal>
        <div className="w-full h-full overflow-y-hidden">
          <div className="w-full box-border py-[1rem] px-[2rem] flex gap-[1rem] items-center">
            <div className={`${skeleton} flex-1 h-[1rem] xs:h-[1.2rem] md:h-[1.5rem]`} />
          </div>

          <div className="w-full box-border p-[2rem] flex flex-col gap-[2rem]">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-[1rem]">
              <div className={`${skeleton} w-full h-[200px] xs:flex-1 xs:h-[300px]`} />
              <div className="flex flex-col gap-[1rem] flex-1 md:p-[1rem]">
                <div className={`${skeleton} w-full h-[1rem] md:h-[1.2rem]`} />
                <div className={`${skeleton} w-full h-[1rem]`} />
              </div>
            </div>

            <div className={`${skeleton} w-full h-[1.8rem] md:h-[2rem]`} />
          </div>

          <div className="flex flex-col gap-[1rem] w-full">
            <div className={`${skeleton} w-full h-[1rem]`} />
            <div className={`${skeleton} w-full h-[5rem]`} />
          </div>
        </div>      
      </ProjectModal>
    </Root>
  )
}

export default Loading;
