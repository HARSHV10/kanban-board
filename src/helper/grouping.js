import {data} from './data.js';



export const groupData=(data,grouping,ordering)=>{
    
    const groupKey = grouping;
    const tickets = data['tickets'];
    
    const groupedData = tickets.reduce((acc, item) => {
    const keyItem = item[groupKey];
    if(!acc[keyItem]){
        acc[keyItem]=[];
    }
    acc[keyItem].push(item);
    return acc;
},{});

//// sort the grouped data 
for(let i in groupedData){
    groupedData[i].sort((a, b) => a[ordering] < b[ordering] ? -1 : 1)
};
return groupedData;

}
