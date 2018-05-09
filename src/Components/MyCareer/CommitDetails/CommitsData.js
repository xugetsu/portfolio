const commitsData = {
    master:{ 
        commits:{
            m01:{title:'Robot Design Improvement', date:'Sun/01/Jan/2017'},
            m02:{title:'Robot path optimization ', date:'Sun/01/Jan/2017'},
            m03:{title:'Robot command Algorithme optimization ', date:'Sun/01/Jan/2017'},
            m04:{title:'Robot Animation and mouvement validation', date:'Sun/01/Jan/2017'},
            m05:{title:'Start Learning Java ', date:'Sat/04/Mar/2017'},
            m06:{title:'Start Developping A Java Software for Robot mouvement data generation', date:'Tue/04/Apr/2017'},
            m07:{title:'Start Learning Java 3D ', date:'Sun/09/Sep/2017'},
            m08:{title:'SOLIDWORKS - CSWP CERTIFICATE - ', date:'Fri/06/Oct/2017'},
            m09:{title:'Start Developping A Java Software for 3D Robot mouvement Simulation', date:'Thu/12/Oct/2017'},
            m10:{title:'SOLIDWORKS PROFESSIONAL - Mold Making CERTIFICATE - ', date:'Mon/04/Dec/2017'},
            m11:{title:'SOLIDWORKS PROFESSIONAL - Weldments CERTIFICATE - ', date:'Tue/27/Feb/2018'},
            m12:{title:'English Language Training in AMIDEAST', date:'Mon/05/Mar/2018',w:6},
            m13:{title:'', date:'',x:17,w:1,btn:false},
            m14:{title:'', date:'',x:18,w:1,btn:false},
            m15:{title:'', date:'',x:19,w:1,btn:false},
            m16:{title:'English Language Training in AMIDEAST - Certification', date:'Wed/02/May/2018',x:20,w:1},
            m17:{title:'', date:'',x:21,w:2},
        },
        config:{
            branchType: 'master',
            startPoint:0,
            rowLevel:2
        }
    },
    webDev:{
        commits:{
            w01:{title:'Start learning HTML', date:'Thu/16/Nov/2017'},
            w02:{title:'Start learning CSS',  date:'Mon/20/Nov/2017'},
            w03:{title:'First time developing a website / project portfolio', date:'Fri/01/Dec/2017'},
            w04:{title:'Start learning JavaScript', date:'Sat/02/Jan/2018'},
            w05:{title:'Start Learning Es6', date:'Mon/15/Jan/2018'},
            w06:{title:'Start Learning React', date:'Wed/17/Jan/2018'},
            w07:{title:'Start Developing my first project with react', date:'Wed/24/Jan/2018'},
            w08:{title:'Start Learning Python via Udacity NanoDegree Full-Stack Track - One Million Arab Coders', date:'Fra/26/Feb/2018'},
            w09:{title:'Start Learning Git (Full-Stack Track - One Million Arab Coders)', date:'Sun/18/Mar/2018'},
            w10:{title:'Taking The Final Assessment (Full-Stack Track - One Million Arab Coders) ', date:'Mon/02/Apr/2018'},
            w11:{title:'Start Developping A React App through tutorials', date:'Wed/04/Apr/2018'},
            w12:{title:'Start Developping My web Page', date:'Thu/26/Apr/2018'},
            w13:{title:'Start Looking for a Job !', date:'Thu/10/May/2018',btn:false},
        },
        config:{
            branchType: 'branchUp',
            startPoint:9,
            rowLevel:3
        }
    },
    amideast:{
        commits:{
            a01:{title:'English Language Training in AMIDEAST', date:'Mon/05/Mar/2018'},
            a02:{title:'English Language Training in AMIDEAST - Exam',  date:'Tue/24/Apr/2018'},
            a03:{title:'English Language Training in AMIDEAST - Certification',  date:'Wed/02/May/2018',btn:false},
        },
        config:{
            branchType: 'branchDown',
            startPoint:17,
            rowLevel: 1
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