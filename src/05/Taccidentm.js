import Taccidentc1 from "./Taccidentc1";
import Taccidentc2 from "./Taccidentc2";
import Taccidentdt from "./Taccidentdt";
import Taccidenth from "./Taccidenth";

const Taccidentm = ({c1, c2, data}) => {

    return(
        <>
            <div className="tcontent">
                <Taccidenth />
            </div>
            <div className="Tmain">
                <Taccidentc1 />
                <Taccidentc2 />
                <Taccidentdt />
            </div>
        </>   
    );
};

export default Taccidentm;