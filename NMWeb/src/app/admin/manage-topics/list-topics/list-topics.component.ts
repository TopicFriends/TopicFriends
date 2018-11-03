import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TopicsService} from "../../../shared/topics.service";
import {MatInput} from "@angular/material";
import {Subject} from "rxjs";
import {TagEntry} from "../../../topics-shared/tag-entry";
import {Router} from "@angular/router";


const SEARCH_DEBOUNCE: number = 100;


@Component({
  selector: 'app-list-topics',
  templateUrl: './list-topics.component.html',
  styleUrls: ['./list-topics.component.scss']
})
export class ListTopicsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatInput) searchInput: MatInput;

  public topics: TagEntry[];
  private subjectSearch: Subject<string> = new Subject();

  constructor(
    public topicsService: TopicsService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.handleSearch();
    this.subjectSearch.debounceTime(SEARCH_DEBOUNCE).subscribe(query => {
      this.handleSearch(query);
    });
  }

  ngAfterViewInit(): void {
    this.searchInput.focus();
  }

  handleSearch(query: string = '') {
    this.topics = this.searchTopics(query);
  }

  searchTopics(query: string = ''): TagEntry[] {
    query = query.toLowerCase();
    return this.topicsService.topics.filter((topic) =>
      topic.name.toLowerCase().includes(query)
    );
  }

  onSearch(query: string = '') {
    this.subjectSearch.next(query);
  }

  createTopic(query: string) {
    this.router.navigate(['/admin/topics/create'], {queryParams: {name: query}});
  }

  editTopic(topic: TagEntry) {
    this.router.navigate([`/admin/topics/${topic.id}/edit`]);
  }

}
