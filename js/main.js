/*========= PORTFOLIO ITEM FILTER =========*/
const filterContainer = document.querySelector(".portfolio-filter-inner"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem = portfolioItems.length;

      for (let i=0 ; i < totalFilterBtn ; i ++)
      {
        filterBtns[i].addEventListener("click", function()
        {
          filterContainer.querySelector(".active").classList.remove("active");
          this.classList.add("active");

          const filterValue = this.getAttribute("data-filter");
          for(let k=0 ; k<totalPortfolioItem ; k++)
          {
            if(filterValue === portfolioItems[k].getAttribute("data-category"))
            {
              portfolioItems[k].classList.remove("hide");
              portfolioItems[k].classList.add("show");
            }
            else
            {
              portfolioItems[k].classList.add("hide");
              portfolioItems[k].classList.remove("show");
            }
            if(filterValue === "all")
            {
              portfolioItems[k].classList.remove("hide");
              portfolioItems[k].classList.add("show");
            }
          }
        })
      }

/*========= nav =========*/
const navContainer = document.querySelector(".nav"),
      navBtns = navContainer.querySelectorAll("a"),
      totalNavBtn = navBtns.length;

      for (let i=0 ; i < totalNavBtn ; i ++)
      {
        navBtns[i].addEventListener("click", function()
        {
          navContainer.querySelector(".active").classList.remove("active");
          this.classList.add("active");
        })
      }

/*========= TESTIMOIAl =========*/
var swiper = new Swiper('.swiper-container', {
      loop: 'true',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
