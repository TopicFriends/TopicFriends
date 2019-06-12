import {
  Dict,
  dictToArrayAssigningIds,
} from '../../util/dictionary-utils'

export class NavPage {
  id?: string
  icon: string
}

function n(param?: { icon: string }) {
  return param || {}
}

export class Navs {
  Profile = n({
    icon: 'person_pin',
  })
  Meetings = n({
    icon: 'event',
  })
  Favors = n({
    icon: 'build'
  })
  People = n()
  Topics = n({
    icon: 'filter_vintage',
  })
  Map = n()
  About = n({
    icon: 'info',
  })
}

export const navs = dictToArrayAssigningIds(new Navs() as any as Dict<NavPage>).map((_: NavPage) => {
  _.icon = _.icon || _.id.toLowerCase()
  return _
})
