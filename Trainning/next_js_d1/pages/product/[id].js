export default function ProductDetail(props){
    props?.id
    return (
        <div>
            <h1>Product Detail  {props?.id}  </h1>
        </div>
    )
}

export async function getServerSideProps(context){
    let  { id } = context.params
    context.params?.id
    
    return{
        props: {
            id
        }
    }
}