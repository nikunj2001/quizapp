const qbox=[
    {
        question:"Who is father of modern computers?",
        answers:["Alen Turin","Steve Jobs","Denis Ritchie","Bill Gates"],
        correct:"Alen Turin",
        qid:'000001'
    },
    {
        question:"Who is owner of apple?",
        answers:["Alen Turin","Denis Ritchie","Steve Jobs","Bill Gates"],
        correct:"Steve Jobs",
        qid:'000002'
    },
    {
        question:"What is the js framework which is developed by facebook?",
        answers:["node js","nutrolino js","next js","React js"],
        correct:"React js",
        qid:'000003'
    },
    {
        question:"Who is created C?",
        answers:["Alen Turin","Steve Jobs","Denis Ritchie","Bill Gates"],
        correct:"Deins Ritchie",
        qid:'000004'
    },
    {
        question:"Who is created C++?",
        answers:["Benjomin Franclin","Bjarne Stroustrup","Denis Ritchie","Bill Gates"],
        correct:"Deins Ritchie",
        qid:'000004'
    }
    
];

export default (n=5) =>  Promise.resolve(qbox.sort(()=>0.5-Math.random()).slice(0,n));