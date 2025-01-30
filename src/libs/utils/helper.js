const chunkFields = (fields, colsEachRow) => {
    //console.log("fields",fields);
    const rows = [];
    for (let i = 0; i < fields.length; i += colsEachRow) {
      rows.push(fields.slice(i, i + colsEachRow));
    }
    return rows;
};



export { chunkFields};