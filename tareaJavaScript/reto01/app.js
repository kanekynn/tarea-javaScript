console.log(12)

function fixFiles(files) {
    const fileCount = {};
    return files.map(file => {
        if (fileCount[file]) {
            const newFileName = `${file}(${fileCount[file]})`;
            fileCount[file]++;
            return newFileName;
        } else {
            fileCount[file] = 1;
            return file;
        }
    });
}
const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
console.log(fixFiles(files)); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
