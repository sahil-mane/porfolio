export const getSignature = async (public_id) =>{
    const res = await fetch( 
        `http://localhost:9000/api/signature?public_id=${public_id}`
    );
    const { signature } = await res.json();
    return signature;
}