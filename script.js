document.addEventListener("DOMContentLoaded",function()
{
    // form
    let ul=document.getElementsByClassName("navigation")[0];
    ul.addEventListener('click',function(e)
    {
        for (let i = 0; i < this.children.length; i++)
        {
            this.children[i].getElementsByClassName("navigation-href")[0].style.color="#ffffff";
        }
        e.target.style.color="#f06c64";
    });
    let form__submit=document.getElementsByClassName("form__submit")[0];
    let form_div=document.createElement("div");
    document.body.appendChild(form_div);
    form_div.style.position="fixed";
    form_div.style.top="50%";
    form_div.style.left="50%";
    form_div.style.display="none";
    form_div.style["background-color"]="gray";
    form_div.style.padding="20px";
    let span_first=document.createElement("span");
    form_div.appendChild(span_first);
    span_first.innerHTML="Письмо отправлено";
    let p_second=document.createElement("p");
    form_div.appendChild(p_second);
    let p_third=document.createElement("p");
    form_div.appendChild(p_third);  
    let b_okay=document.createElement("button");
    form_div.appendChild(b_okay);  
    form__submit.addEventListener("click",function(event)
    {
        if(document.getElementsByClassName("form__name")[0].value!="" && document.getElementsByClassName("form__email")[0].value!="")
        {
            form_div.style.display="block";
            if(document.getElementsByClassName("form__subject")[0].value=="")
            {
                p_second.innerHTML="Без темы";
            }
            else
            {
                p_second.innerHTML="Тема: "+document.getElementsByClassName("form__subject")[0].value;
            }
            if(document.getElementsByClassName("form__describe")[0].value=="")
            {
                p_third.innerHTML="Без описания";
            }
            else
            {
                p_third.innerHTML="Описание: "+document.getElementsByClassName("form__describe")[0].value;
            }
            b_okay.innerHTML="ОК";
            b_okay.addEventListener('click',function(event)
            {
                form_div.style.display="none";
            });
        }
        else
        {
            alert("Заполните поля Name и Email");
        }
    });
    // portfolio-tags
    let images=document.getElementsByClassName("portfolio__images")[0];
    images.addEventListener('click',function(event)
    {
        if(event.target==this)
        {

        }
        else
        {
            for (let i = 0; i < this.children.length; i++)
            {
                this.children[i].style.border="#2d303a";
            }
            event.target.style.border="5px solid #F06C64";
        }
    });
    let tabs=document.getElementsByClassName("portfolio__tags")[0];
    tabs.addEventListener("click",function(e)
    {
        for (let i = 0; i < this.children.length; i++)
        {
            this.children[i].style.color="#767e9e";
            this.children[i].style.border="1px solid #767e9e";
        }
        e.target.style.color="#dedede";
        e.target.style.border="1px solid #dedede";
        if(e.target==this.children[0])
        {
            for(let num=0;num<images.children.length-2;num++)
            {
                if(num==images.children.length-2)
                {
                    images.children[num].style.order=JSON.stringify(0);
                    continue;    
                }
                images.children[num].style.order=JSON.stringify(num+1);
            }
        }
        if(e.target==this.children[1])
        {
            for(let num=images.children.length-2;num>=0;num--)
            {
                if(num==0)
                {
                    images.children[num].style.order=JSON.stringify(images.children.length-2);
                    continue;    
                }
                images.children[num].style.order=JSON.stringify(num-1);
            }
        }
        if(e.target==this.children[2])
        {
            for(let num=images.children.length-2;num>=0;num--)
            {
                if(num==0)
                {
                    images.children[num].style.order=JSON.stringify(images.children.length-3);
                    continue;    
                }
                if(num==1)
                {
                    images.children[num].style.order=JSON.stringify(images.children.length-2);
                    continue;    
                }
                images.children[num].style.order=JSON.stringify(num-2);
            }
        }
        if(e.target==this.children[3])
        {
            for(let num=0;num<images.children.length-2;num++)
            {
                if(num==images.children.length-3)
                {
                    images.children[num].style.order=JSON.stringify(0);
                    continue;    
                }
                if(num==images.children.length-2)
                {
                    images.children[num].style.order=JSON.stringify(1);
                    continue;    
                }
                images.children[num].style.order=JSON.stringify(num+2);
            }
        }
    });
    // slider
    let slider_left=document.getElementsByClassName("left-check")[0];
    let slider_right=document.getElementsByClassName("right-check")[0];
    let slider=document.getElementsByClassName("slider__container")[0];
    let slider_picture=document.createElement("img");
    slider_picture.src="./assets/images/Slider.svg";
    slider_picture.style.width="1020px";
    slider_picture.style.height="594px";
    slider_picture.style.display="none";
    slider.appendChild(slider_picture);
    var count=0;
    slider_left.addEventListener("click",function(event)
    {
        if(count%2==0)
        {
            slider_picture.style.display="block";
            document.getElementsByClassName("slider__vertical-image")[0].style.display="none";
            document.getElementsByClassName("slider__horizontal-image")[0].style.display="none";
        }
        else
        {
            document.getElementsByClassName("slider__vertical-image")[0].style.display="block";
            document.getElementsByClassName("slider__horizontal-image")[0].style.display="block";
            slider_picture.style.display="none";
        }
        count++;
    });
    let areavertical=document.createElement("div");
    let areahorizontal=document.createElement("div");
    let bdiv=document.getElementsByClassName("slider__vertical-image")[0];
    areavertical.style["border-radius"]="28px";
    areavertical.style.height="458px";
    areavertical.style.width="215px";
    areavertical.style.position="absolute";
    areavertical.style.top="0";
    areavertical.style.left="0";
    areavertical.style["z-index"]="7";
    bdiv.appendChild(areavertical);
    let div__first=document.createElement("div");
    div__first.style.left="13px";
    div__first.style.position="absolute";
    div__first.style.top="65px";
    div__first.style.height="333px";
    div__first.style.width="189px";
    div__first.style.display="none";
    div__first.style["background-color"]="black";
    div__first.style["z-index"]="4";
    bdiv.appendChild(div__first);
    let count_vertical=0;
    let bdivh=document.getElementsByClassName("slider__horizontal-image")[0];
    areahorizontal.style["border-radius"]="28px";
    areahorizontal.style.position="absolute";
    areahorizontal.style.top="0";
    areahorizontal.style.left="0";
    areahorizontal.style.height="215px";
    areahorizontal.style.width="458px";
    areahorizontal.style["z-index"]="6";
    bdivh.appendChild(areahorizontal);
    let div__second=document.createElement("div");
    div__second.style.left="60px";
    div__second.style.position="absolute";
    div__second.style.top="14px";
    div__second.style.height="188px";
    div__second.style.display="none";
    div__second.style.width="333px";
    div__second.style["background-color"]="black";
    div__second.style["z-index"]="3";
    bdivh.appendChild(div__second);
    let count_horizontal=0;
    areahorizontal.addEventListener("click",function(event)
    {
        if(count_horizontal%2==0)
        {
            div__second.style.display="block";
        }
        else
        {
            div__second.style.display="none";
        }
        count_horizontal++;
    });
    areavertical.addEventListener("click",function(event)
    {
        if(count_vertical%2==0)
        {
            div__first.style.display="block";
        }
        else
        {
            div__first.style.display="none";
        }
        count_vertical++;
    });
    slider_right.addEventListener("click",function(event)
    {
        if(count%2==0)
        {
            slider_picture.style.display="block";
            document.getElementsByClassName("slider__vertical-image")[0].style.display="none";
            document.getElementsByClassName("slider__horizontal-image")[0].style.display="none";
        }
        else
        {
            document.getElementsByClassName("slider__vertical-image")[0].style.display="block";
            document.getElementsByClassName("slider__horizontal-image")[0].style.display="block";
            slider_picture.style.display="none";
        }
        count++;
    });
});