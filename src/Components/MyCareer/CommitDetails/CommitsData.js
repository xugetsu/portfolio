const commitsData = {
    master:{ 
        commits:{
            m1:{title:'Robot Design Improvement', date:'Sun/01/Jan/2017'},
            m2:{title:'Robot Design Improvement', date:'Sun/01/Jan/2017'},
            m3:{title:'Robot Design Improvement', date:'Sun/01/Jan/2017'},
            m4:{title:'Robot Design Improvement', date:'Sun/01/Jan/2017'},
            m5:{title:'Robot Design Improvement', date:'Sun/01/Jan/2017'},
        },
        config:{
            branchType: 'master',
            startPoint:0,
            rowLevel:2
        }
    },
    webDev:{
        commits:{
            w1:{title:'Start learning HTML', date:'Thu/16/Nov/2017'},
            w2:{title:'Start learning CSS',  date:'Mon/20/Nov/2017'},
            w3:{title:'First time developing a website / project portfolio', date:'Fri/1/Dec/2017'},
            w4:{title:'Full-Stack Track - One Million Arab Coders - Python', date:'Fra/26/Feb/2018'},
            w5:{title:'Full-Stack Track - One Million Arab Coders - Git', date:'Sun/18/Mar/2018'},
            w6:{title:'Full-Stack Track - One Million Arab Coders - Final Assessment', date:'Mon/02/Apr/2018'},
            w7:{title:'English Language Training in AMIDEAST', date:'Mon/05/Mar/2018'},
        },
        config:{
            branchType: 'branchUp',
            startPoint:5,
            rowLevel:3
        }
    },
    amideast:{
        commits:{
            a1:{title:'Start learning HTML', date:'Thu/16/Nov/2017'},
            a2:{title:'Start learning CSS',  date:'Mon/20/Nov/2017'},
        },
        config:{
            branchType: 'branchDown',
            startPoint:5,
            rowLevel:1
        } 
    },
};

export default commitsData;


// const oldData = [
//     {i:'c1',x:0,y:1,w:1,h:1,content:['Robot Design Improvement','Sun/01/Jan/2017'],hash:1,static:true},
//     {i:'c2',x:1,y:1,w:1,h:1,content:['Robot Design Improvement','Sun/01/Jan/2017'],hash:2,static:true},
//     {i:'c3',x:2,y:1,w:1,h:1,content:['Robot Design Improvement','Sun/01/Jan/2017'],hash:3,static:true},
//     {i:'c4',x:3,y:1,w:2,h:1,content:['Robot Design Improvement','Sun/01/Jan/2017'],hash:4,static:true},
//     {i:'b5',x:3,y:2,w:1,h:1,content:['Start learning HTML','Thu/16/Nov/2017'],hash:5,static:true},
//     {i:'c6',x:4,y:2,w:1,h:1,content:['Start learning CSS','Mon/20/Nov/2017'],hash:6,static:true},
//     {i:'c7',x:5,y:2,w:1,h:1,content:['First time developing a website / project portfolio','Fri/1/Dec/2017'],hash:7,static:true},
//     {i:'c8',x:6,y:2,w:1,h:1,content:['Start learning JavaScript','Sat/02/Jan/2018'],hash:8,static:true},
//     {i:'c9',x:7,y:2,w:1,h:1,content:['Start Learning Es6','Mon/15/Jan/2018'],hash:9,static:true},
//     {i:'c10',x:8,y:2,w:1,h:1,content:['Start Learning React','Wed/17/Jan/2018'],hash:10,static:true},
//     {i:'c11',x:9,y:2,w:1,h:1,content:['Developing my first project with react','Wed/24/Jan/2018'],hash:11,static:true},
//     {i:'c12',x:10,y:2,w:1,h:1,content:['Full-Stack Track - One Million Arab Coders - Python','Fra/26/Feb/2018'],hash:12,static:true},
//     {i:'c13',x:11,y:2,w:1,h:1,content:['Full-Stack Track - One Million Arab Coders - Git','Sun/18/Mar/2018'],hash:13,static:true},
//     {i:'c14',x:12,y:2,w:1,h:1,content:['Full-Stack Track - One Million Arab Coders - Final Assessment','Mon/02/Apr/2018'],hash:14,static:true},
//     {i:'c15',x:8,y:0,w:1,h:1,content:['English Language Training in AMIDEAST','Mon/05/Mar/2018'],hash:15,static:true},
//     {i:'c16',x:5,y:1,w:1,h:1,content:['English Language Training in AMIDEAST','Mon/05/Mar/2018'],hash:15,static:true},
//     ];