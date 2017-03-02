import { Observable, Observer } from "rxjs";
import { RxHttpRequest } from "rx-http-request";
import { Calculator } from "./calculator-service";
import { Scraper } from "./scraper-service";
import { IItem } from "./interfaces";

class Main {
  private goldItems: IItem[];
  private silverItems: IItem[];
  private platinumItems: IItem[];
  private priceDataSourceURL = "http://www.degussa-goldhandel.de/infothek/preisliste/";
  private scraper: Scraper;

  constructor() {
    this.scraper = new Scraper();

    this.scraper.attemptRequest(this.priceDataSourceURL).subscribe((html: string) => {
      this.scraper.loadCheerioWithHtml(html);
      this.goldItems = this.scraper.getItemsForSale("#tab2");
      this.silverItems = this.scraper.getItemsForSale("#tab3");
      // this.platinumItems = this.scraper.getItemsForSale("#tab4");
      console.log(Calculator.sortBySpread(this.silverItems).slice(0, 5));
      console.log(Calculator.sortBySpread(this.goldItems).slice(0, 5));
    });
  }

}

let m = new Main();
