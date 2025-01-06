

const List = ({
    description
}) => {

    const regex = /<h3[^>]*>(.*?)<\/h3>/g;


    const headings = [];
    let match;
    
    while ((match = regex.exec(description)) !== null) {
        headings.push(match[1]);
    }

    return (
        <>
            {
                headings.map((item, i) => {
                    return (
                        <li key={i} className="intro-table__item ">
                            <p>{item}</p>
                        </li>
                    )
                })
            }
           
        </>
    )
}

export default List