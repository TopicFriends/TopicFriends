
/* TODO rename to Topic */
export class TagEntry {
  logo: string;

  constructor(
    public name: string,
    // public topicId?,

  ) {
    this.logo = this.getLogoPath(name);
  }

  public getLogoPath(tag: string){
    // return '../../../assets/images/logos/' + tag.toLowerCase() + '-icon.svg'
    return '../../../assets/images/logos/' + tag.toLowerCase().replace(' ', '-') + '.svg'
  }

}
