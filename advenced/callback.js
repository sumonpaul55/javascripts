function greeting(greetingHandle,names){
    greetingHandle(names);
}

function greetingHandler(names) {
    // console.log("greetings", names)
}
greeting(greetingHandler, "Sumon paul")
