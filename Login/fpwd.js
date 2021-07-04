function getPassword(e){
    e.preventDefault()
    const form= new FormData(e.target)


    const userDetails={
        mailid:form.get("mailid")
        
    }

    axios.post('http://localhost:3000/password/forgotpassword',userDetails).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })

}