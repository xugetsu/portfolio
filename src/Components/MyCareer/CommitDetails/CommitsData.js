const commitsData = {
    master:{ 
        commits:{
            m01:{rank:1,title:'Robot Design Improvement', date:'Sun/01/Jan/2017'},
            m02:{rank:2,title:'Robot path optimization ', date:'Sun/01/Jan/2017'},
            m03:{rank:3,title:'Robot command Algorithme optimization ', date:'Sun/01/Jan/2017'},
            m04:{rank:4,title:'Robot Animation and mouvement validation', date:'Sun/01/Jan/2017'},
            m05:{rank:5,title:'Start Learning Java ', date:'Sat/04/Mar/2017'},
            m06:{rank:6,title:'Start Developping A Java Software for Robot mouvement data generation', date:'Tue/04/Apr/2017'},
            m07:{rank:7,title:'Start Learning Java 3D ', date:'Sun/09/Sep/2017'},
            m08:{rank:8,title:'SOLIDWORKS - CSWP CERTIFICATE - ', date:'Fri/06/Oct/2017'},
            m09:{rank:9,title:'Start Developping A Java Software for 3D Robot mouvement Simulation', date:'Thu/12/Oct/2017'},
            m10:{rank:13,w:4,title:'SOLIDWORKS PROFESSIONAL - Mold Making CERTIFICATE - ', date:'Mon/04/Dec/2017'},
            m11:{rank:19,w:5,x:13,title:'SOLIDWORKS PROFESSIONAL - Weldments CERTIFICATE - ', date:'Tue/27/Feb/2018'},
            m12:{rank:20,x:18,title:'English Language Training in AMIDEAST', date:'Mon/05/Mar/2018'},
            m13:{title:'', date:'',x:19,btn:false},
            m14:{title:'', date:'',x:20,btn:false},
            m15:{title:'', date:'',x:21,btn:false},
            m16:{rank:26,x:22,title:'English Language Training in AMIDEAST - Certification', date:'Wed/02/May/2018'},
            m17:{rank:27,x:23,title:'Start Looking for a Job !', date:'Thu/10/May/2018',w:2},
        },
        config:{
            branchType: 'master',
            startPoint:0,
            rowLevel:2
        }
    },
    webDev:{
        commits:{
            w00:{title:'', date:'',btn:false},
            w01:{rank:10,title:'Start learning HTML', date:'Thu/16/Nov/2017'},
            w02:{rank:11,title:'Start learning CSS', date:'Mon/20/Nov/2017'},
            w03:{rank:12,title:'First time developing a website / project portfolio', date:'Fri/01/Dec/2017'},
            w04:{rank:14,title:'Start learning JavaScript', date:'Sat/02/Jan/2018'},
            w05:{rank:15,title:'Start Learning Es6', date:'Mon/15/Jan/2018'},
            w06:{rank:16,title:'Start Learning React', date:'Wed/17/Jan/2018'},
            w07:{rank:17,title:'Start Developing my first project with react', date:'Wed/24/Jan/2018'},
            w08:{rank:18,title:'Start Learning Python (Full-Stack Track - One Million Arab Coders)', date:'Fra/26/Feb/2018'},
            w09:{rank:21,title:'Start Learning Git (Full-Stack Track - One Million Arab Coders)', date:'Sun/18/Mar/2018'},
            w10:{rank:22,title:'Taking The Final Assessment (Full-Stack Track - One Million Arab Coders) ', date:'Mon/02/Apr/2018'},
            w11:{rank:23,title:'Start Developping A React App through courses', date:'Wed/04/Apr/2018'},
            w12:{rank:25,title:'Start Developping My Website', date:'Thu/26/Apr/2018'},
            w13:{rank:27,title:'Start Looking for a Job !', date:'Thu/10/May/2018',btn:false},
        },
        config:{
            branchType: 'branchUp',
            startPoint:9,
            rowLevel:4
        }
    },
    amideast:{
        commits:{
            a01:{rank:20,title:'English Language Training in AMIDEAST', date:'Mon/05/Mar/2018',btn:false},
            a02:{rank:24,title:'English Language Training in AMIDEAST - Exam', date:'Tue/24/Apr/2018'},
            a03:{rank:26,title:'English Language Training in AMIDEAST - Certification', date:'Wed/02/May/2018',btn:false},
        },
        config:{
            branchType: 'branchDown',
            startPoint:19,
            rowLevel: 0
        } 
    },
};

export default commitsData;
