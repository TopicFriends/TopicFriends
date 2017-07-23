
/* TODO rename to Topic */
export class TagEntry {
  logo: string;

  constructor(
    public name: string,
    // public topicId?,
    logo?: string
  ) {
    if ( logo === null ) {
      this.logo = null;
    } else if ( logo === undefined ) {
      this.logo = this.getLogoPath(name);
    } else {
      this.logo = this.getLogoPath(logo);
    }
  }

  public getLogoPath(tag: string){
    // return '../../../assets/images/logos/' + tag.toLowerCase() + '-icon.svg'
    return '../../../assets/images/logos/' + tag.toLowerCase().replace(/ /g, '-') + '.svg'
  }

}
