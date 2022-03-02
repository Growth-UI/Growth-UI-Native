const TheSXProp = `
# The \`sx\` prop
<br/>

The \`sx\` prop is a shortcut for defining custom style that extends React Native\`s StyleProp.
<br/><br/><br/><br/>

## Example
<br/>

~~~jsx

<Box sx={{ bg: '#ccc' }} />
// equivalent to backgroundColor: '#ccc'

<Box sx={{ p: 10 }} />
// equivalent to padding: 10

<Box sx={{ backgroundColor: '#fff' }} />
<Box sx={{ borderRadius: 500 }} />
~~~
<br/><br/>

## Theme aware properties
<br/>

The following aliases are available with extend to React Native\`s original style props.
<br/><br/>

| Prop | CSS property                    |
| :---  | :------------------------------  |
| \`bg\` | \`backgroundColor\`               |
| \`m\`  | \`margin\`                        |
| \`mt\` | \`margin-top\`                    |
| \`mr\` | \`margin-right\`                  |
| \`mb\` | \`margin-bottom\`                 |
| \`ml\` | \`margin-left\`                   |
| \`mx\` | \`margin-left\`, \`margin-right\`   |
| \`my\` | \`margin-top\`, \`margin-bottom\`   |
| \`p\`  | \`padding\`                       |
| \`pt\` | \`padding-top\`                   |
| \`pr\` | \`padding-right\`                 |
| \`pb\` | \`padding-bottom\`                |
| \`pl\` | \`padding-left\`                  |
| \`px\` | \`padding-left\`, \`padding-right\` |
| \`py\` | \`padding-top\`, \`padding-bottom\` |
`;

export default TheSXProp;
