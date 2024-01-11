console.log(new Date().getDay())
const Day=new Date().getDate()
const hour=new Date().getHours()
function time (req,res,next){
if(Day<5){
    res.send("sorry we are closed")
    
}
else{
    next()
}
}

module.exports=time