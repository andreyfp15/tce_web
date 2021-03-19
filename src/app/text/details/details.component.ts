import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  text: string;
  lstSentenceString: string[];
  lstSentences = <any>[];
  btTranslateActive : boolean;

  constructor(private modal: NgbModal) { }

  ngOnInit() {
    this.text = "Jenna is a professional cook and today is her first day in a new restaurant. She is very excited, but also nervous because she doesn’t want to get late for her first day. She has to be there at 8 o’clock and it is already 7. She is not ready yet and she is unsure how she should go to work. She is thinking maybe it is too late to take her car. She might get stuck in traffic and then for sure, she will be late. The same thing will happen if she calls a taxi. Instead, she thinks she should take the metro. She gets dressed quickly; she grabs some coffee and a sandwich from the coffee shop down the road and gets in the next metro going towards the direction of the restaurant. Time is running out and she is getting more and more anxious. When the doors open to the metro station, she starts running. Happily, she arrives right on time for her first day";
    this.lstSentenceString = this.text.split(". ");

    for(var i = 0; i < this.lstSentenceString.length; i++)
      this.lstSentences.push({ id: i, content: this.lstSentenceString[i]+ ". ", selected : false})

  }

  onClickWord(word : any){
    word.selected = !word.selected;

    this.btTranslateActive = false;
    for(var i = 0; i < this.lstSentences.length; i++) {
      if(this.lstSentences[i].selected){
        this.btTranslateActive = true;
        break;
      }
    }

  }

  openModalSelection(modalSelection: any) {
    this.modal.open(modalSelection, { size: 'lg' });
  }

  openModalAll(modalAll: any) {
    this.modal.open(modalAll, { size: 'lg' });
  }

}
