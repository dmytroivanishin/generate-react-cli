import { transform, toCorrectName, setTemplate, getDataBasedOnCondition } from "../utils";
import { ComponetStyle } from "../templates";
import { SetTemplate } from "../types";

describe("Test util functions", () => {
  describe("function transform", () => {
    it("should return transformed template", () => {
      const expectTemplate = ".Box{}"
      
      const result = transform(ComponetStyle, { TemplateName: "Box" });

      expect(result).toBe(expectTemplate)
    });
  });  

  describe("function toCorrectName", () => {
    it("should return correct data without any extra sybmols", () => {
      const recieveData = [
        "Card-Item",
        "Post.Item",
        "Post!",
        "B#ox"
      ];

      const expectData = [
        "CardItem",
        "PostItem",
        "Post",
        "Box"
      ];

      recieveData.forEach((str, i) => {
        const result = toCorrectName(str);

        expect(result).toBe(expectData[i]);
      });
    });
  });

  describe("function setTemplate", () => {
    it("should return virtual template for transforming", () => {
      const componentName = "Box";
      const virtualTemplate: SetTemplate = setTemplate({
        template: ComponetStyle,
        fileName: `${componentName}.css`
      });

      virtualTemplate
        .setTransform({
          from: "TemplateName",
          to: componentName
        });

      expect(virtualTemplate).toEqual({
        template: ComponetStyle,
        fileName: `Box.css`,
        transform: {
          TemplateName: "Box"
        },
        setTransform: virtualTemplate.setTransform
      });
    });
  });

  describe("function getDataBasedOnCondition", () => {
    const useTypescript = (condition: boolean) => getDataBasedOnCondition(condition, "ts", "js");

    it("should return ts", () => {
      const result = useTypescript(true);
  
      expect(result).toBe("ts");
    });
    it("should return js", () => {
      const result = useTypescript(false);
  
      expect(result).toBe("js");
    });
  })
});