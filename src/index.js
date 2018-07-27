/**
 * Write the recruitment message to the console
 */
const recruitMessage = () => {
    const fontStyle = 'font-family: Hind Vadodara, Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #535353; background-color: #fff;';
    const fontStyleUnderline = `${fontStyle} text-decoration: underline; margin-left: 55px`;
    const logo = 'font-size:50px; margin-left:35px; padding-right:295px; background: url(https://dy3erx8o0a6nh.cloudfront.net/images/logo-just-eat-2016_x2.png) no-repeat;)';
    const rays = 'font-size:150px; margin-left:-55px; margin-top:-90px; padding-right:285px; background: url(https://dy3erx8o0a6nh.cloudfront.net/images/color-rays.png) 50% no-repeat;)';

    console.log(`

  %c %c

    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Love development? Love takeaway? Then why not join us?
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    %chttps://careers.just-eat.com/opportunities

    %c
    `, logo, fontStyle, fontStyleUnderline, rays);
};

export default recruitMessage;
