import { ElementRef, EventEmitter, OnInit, QueryList } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { FabulaService } from '../../services/fabula.service';
export declare class ListComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    contentItems: QueryList<ListItemComponent>;
    viewItems: QueryList<ListItemComponent>;
    color: string;
    divider: boolean;
    padding: boolean;
    props: any;
    striped: boolean;
    clickItem: EventEmitter<any>;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    handleItem(item: any): void;
}
