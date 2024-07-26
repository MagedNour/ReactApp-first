
export default function SectionDivider({color}) {
    console.log(color);
    if(color== "white"){
        return (
            <div className={`sectionDivider relative before:bg-white after:bg-white`}>
                <i className="fa-solid fa-star text-3xl" style={{ color }}></i>
            </div>
        );
    }else{
        return (
            <div className={`sectionDivider relative before:bg-[#2c3e50] after:bg-[#2c3e50]`}>
                <i className="fa-solid fa-star text-3xl" style={{ color }}></i>
            </div>
        );
    }
    
}
