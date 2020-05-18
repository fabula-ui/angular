import { Component, OnInit, ElementRef, Input, ContentChildren, QueryList, AfterViewInit, Output, EventEmitter } from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'fab-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterViewInit, OnInit {
  @ContentChildren(TabComponent) tabComponents: QueryList<TabComponent>;

  @Input('active-border-color') activeBorderColor: string;
  @Input('active-fill-color') activeFillColor: string;
  @Input('active-color') activeColor: string;
  @Input() color: string;
  @Input() expand: boolean;
  @Input() type: string;

  @Output() onChangeTab = new EventEmitter();

  activeTab;
  host;
  props;

  constructor(
    public elRef: ElementRef,
    public themeService: ThemeService
  ) { }

  ngAfterViewInit() {
    this.tabComponents.forEach((tab: TabComponent) => {
      tab.clicked.subscribe((item) => console.log('Teste'));
      tab.activeColor = this.props.activeColor;
      tab.activeBorderColor = this.props.activeBorderColor;
      tab.activeFillColor = this.props.activeFillColor;
      tab.color = this.props.color;
      tab.expand = this.props.expand;
      tab.faded = this.props.faded;
      tab.invert = this.props.invert;
      tab.stacked = this.props.stacked;
      tab.type = this.props.type;

      tab.childViewInit();
    });
  }

  ngOnInit() {
    this.host = this.elRef.nativeElement;
    this.props = {
      activeColor: this.activeColor,
      activeBorderColor: this.activeBorderColor,
      activeFillColor: this.activeFillColor,
      color: this.color,
      expand: this.expand,
      faded: this.host.hasAttribute('faded'),
      invert: this.host.hasAttribute('invert'),
      stacked: this.host.hasAttribute('stacked'),
      type: this.type
    };

    this.themeService.attachClasses(this.host, 'tabs', this.props);
  }

  handleClick() {
    console.log('teste');
  }

  setActiveTab(tab) {
    this.onChangeTab.emit(tab);
  }
}
