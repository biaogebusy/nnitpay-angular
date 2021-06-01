import { Component, Input, OnInit } from '@angular/core';
import { map } from 'lodash-es';
import { NodeService } from 'src/app/service/node.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  @Input() content: any;
  loading = true;
  list: any;
  constructor(private nodeService: NodeService) {}

  ngOnInit(): void {
    this.getNews();
  }
  getNews(): void {
    this.loading = true;
    const params = [
      'fields[node--article]=title,changed,body,drupal_internal__nid,path,article_category,case_cause,content_category,media',
      'include=article_category,case_cause,content_category,media,media.field_media_image',
      'fields[taxonomy_term--article_category]=name',
      'fields[taxonomy_term--case_cause]=name',
      'fields[taxonomy_term--content_category]=name',
      'fields[file--file]=uri',
      'sort=-changed',
      'jsonapi_include=1',
    ].join('&');
    this.nodeService.getNodes('article', params).subscribe((res) => {
      this.list = map(res.data, (item) => {
        const link = this.nodeService.getNodePath(item);
        return {
          title: {
            label: item.title,
            href: link,
          },
          spacer: 'none',
          feature: {
            fullIcon: 'fullscreen',
            openIcon: 'open_in_new',
            link,
            ratios: 'media-16-9',
            img: {
              large: item.media?.field_media_image?.uri.url,
              normal: item.media?.thumbnail?.uri.url,
            },
          },
          date: item.changed,
          category: item.content_category.name,
          body: item.body.summary || item.body.value,
          details: {
            label: 'Read More',
            href: link,
            style: 'style-v1',
            icon: 'open_in_new',
          },
        };
      });
      this.loading = false;
    });
  }
}
