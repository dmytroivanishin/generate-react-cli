const ComponetTsFunction = `import React from "react";
[importStyle]
const [TemplateName]: React.FC = () => (
  <div[className]>[TemplateName] Component</div>
);

export default [TemplateName];
`;

type ComponetTsFunction = typeof ComponetTsFunction;

export default ComponetTsFunction;