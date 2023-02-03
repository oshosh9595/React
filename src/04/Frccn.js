
const Fcrcn = ({frcdt, frccn}) => {
    console.log("frccn", frccn);
    let infoArry = frccn.split(',');
    let kn = 0;
    //{frcdt && )
    infoArry = infoArry.map((v) => 
            <li key={frcdt + kn++}> 
                <span>{v.split(':')[0]}</span>
                {
                v.includes('높음') ?   
                <span className='lired'>{v.split(':')[1]}</span> :
                <span>{v.split(':')[1]}</span>
                }
            </li>    
        ); 

    return(
        <div className='mainbox2'>
            <div className='detail'>
                <ul>{infoArry}</ul>
            </div>
        </div>
    );
}

export default Fcrcn;