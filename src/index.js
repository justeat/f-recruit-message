/**
 * Write the recruitment message to the console
 */
const recruitMessage = () => {
    const fontStyle = 'font-family: "JustEatBasis", Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #535353; background-color: #fff; margin-left: 55px';
    const fontStyleUnderline = `${fontStyle} text-decoration: underline; margin-left: 90px`;
    const logo = 'font-size:50px; margin-left:100px; padding-right:295px; background: url(https://dy3erx8o0a6nh.cloudfront.net/images/je-165-x-32-red@2x.png) no-repeat;)';

    console.log(`

  %c %c

    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Love development? Love takeaway? Then why not join us?
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    %chttps://careers.just-eat.com
    `, logo, fontStyle, fontStyleUnderline);
};

export default recruitMessage;
