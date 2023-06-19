// eslint-plugin-import
// > config (npm package.json)
// >> rule rules import/no-anonymous-default-export
// >>> if not set, this function gives a WARNING: Assign arrow function to a variable before exporting as module defaulteslint
// yet it is possible, but also a bad practice for debugging:
// https://stackoverflow.com/questions/68783347/eslint-warning-assign-arrow-function-to-a-variable-before-exporting-as-module/69265156#69265156
export default ({userData}) => {
    return (
        <span className="user">
        <span className="name">{userData.name}</span>
        <span className="handle">@{userData.handle}</span>
        </span>
    )
}

// https://github.com/import-js/eslint-plugin-import/blob/v2.24.2/docs/rules/no-anonymous-default-export.md
// defaults:
// "rules": {
//     "import/no-anonymous-default-export": 
//       [
//         "error", 
//         {
//           "allowArray": false,
//           "allowArrowFunction": false,
//           "allowAnonymousClass": false,
//           "allowAnonymousFunction": false,
//           "allowCallExpression": true,
//           "allowLiteral": false,
//           "allowObject": false
//         }
//       ]
//   }