const { series } = require('gulp')
const fs = require('fs')

const convertToOptionalChaining = async () => {
    try {
        const data = fs.readFileSync('assets/all.min.js', 'utf8')
        const content = data.replace(/([a-zA-Z]|\))\.(\(|_|[a-zA-Z])/g, (i) => {
            return `${i[0]}?.${i[2]}`
        })
        fs.writeFile('assets/all.min.js', content, err => {
            if (err) {
                console.error(err)
            }
        })
    } catch (err) {
        console.error(err)
    }

    return
}

exports.default = series(
    convertToOptionalChaining
)
