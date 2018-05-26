import CommitsData from './CommitsData';

const generateBranchData = (branchName, branchData, type = 'master', _x0, _y0,open = true, _w0 = 1, h0 = 1) => {
  const branch = Object.keys(branchData).map(
    (commitKey, index, kayArray) => {
      const btn = branchData[commitKey].btn === undefined ? 'middle' : branchData[commitKey].btn;
      const x0 = branchData[commitKey].x === undefined ? _x0 + index :  branchData[commitKey].x;
      const w0 = branchData[commitKey].w === undefined ? _w0 : branchData[commitKey].w ;
      let commitForm = 'normal';
      const date = branchData[commitKey].date;
      const title = branchData[commitKey].title;
      if(type !== 'master' && (index === 0 || index === (kayArray.length - 1))) {
          commitForm = type === 'branchUp' ? index === 0 ? 'branch0Up' : open? 'normal':'branch1Up'
                                            : index === 0 ? 'branch1Down' : open? 'normal':'branch0Down';

      }                                  
      return {branchName: branchName,
              i: commitKey, 
              rank: branchData[commitKey].rank,
              content: [title,date],
              commitForm: commitForm, 
              x:x0, y:_y0, w:w0, h:h0, 
              btn: btn,
              static: true}
  });
    return branch;
};

const generateLayoutData = (CommitsData) =>{
    const layout = Object.keys(CommitsData).map(branch =>
           generateBranchData( branch,
                                    CommitsData[branch].commits,
                                    CommitsData[branch].config.branchType,
                                    CommitsData[branch].config.startPoint,
                                    CommitsData[branch].config.rowLevel,
                                    CommitsData[branch].config.open)
    ).reduce( (currentElement, outputArray) => outputArray.concat(currentElement) ,[]);
    return layout;
};

const generateCommitsLog = (layout) => {
    const commitsLog = Array(26).fill();
    for( let i = 1; i <= 26; i++ ){
        const commit = layout.find( e => e.rank === i);
        commitsLog[i] = {content:commit.content, hash:commit.i, rank:i,p:(commit.x+commit.w) };
    }
    return commitsLog.slice(1);
};

const dataGenerator = () => {
  const layout = generateLayoutData(CommitsData);
  const commitsLog = generateCommitsLog(layout);
  return {layout, commitsLog};
};

export default dataGenerator();