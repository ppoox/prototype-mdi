const state = {
  tabs: [],
  tabsMaxLength: 5,
  tabsSessionStorageKey: 'tabs',
  tabsContainerSelector: '#tabList > ul',
  iframeContainerSelector: '#tabFrameList',
  iframeSelectorAll: '#tabFrameList > iframe',
  iframeSelector: '#tabIframe',
  hideClassName: 'hide',
  markClassName: 'mark',
  tabClickSelecotr: 'a[name=aTab]',
  removeTabClickSelecotr: 'span[name=spanTab]'
}

class Tab {
  constructor(no, title, url, opened) {
    this.no = no
    this.title = title
    this.opened = opened
    this.iframe = new Iframe(this.no, this.title, url)
  }
}

class Iframe {
  constructor(no, title, url) {
    this.no = no
    this.title = title
    this.url = url
    this.width = 300
    this.height = 150
    this.frameBorder = 0
  }
}

const bind = () => {
  document.querySelectorAll(state.tabClickSelecotr)?.forEach((tabBtn) => {
    tabBtn.addEventListener('click', function () {
      clickTab(Number(this.dataset.tabNo))
    })
  })
  document
    .querySelectorAll(state.removeTabClickSelecotr)
    ?.forEach((removeBtn) => {
      removeBtn.addEventListener('click', function () {
        clickTabRemove(Number(this.dataset.tabNo))
      })
    })
  document.querySelector('#moreTab')?.addEventListener('click', function () {
    // TODO 초과 목록 선택창
    alert(
      `초과목록 노출 - ${state.tabs
        .slice(state.tabsMaxLength)
        .map((t) => t.title)
        .join(',')}`
    )
  })
}

const clickTab = (no) => {
  markerTab(no)
  setTabsAtSessionStorage()
  renderTabs()
  hideIframe()
  showIframe(no)
  bind()
}

const clickTabRemove = (no) => {
  const tabIdx = state.tabs.findIndex((t) => t.no === no)
  removeTab(no)
  removeIframe(no)
  setTabsAtSessionStorage()

  if (state.tabs.length) {
    let nextOpenedTabNo = 0
    if (tabIdx === 0) {
      nextOpenedTabNo = state.tabs[0].no
    } else if (tabIdx === state.tabs.length) {
      nextOpenedTabNo = state.tabs[tabIdx - 1].no
    } else {
      nextOpenedTabNo = state.tabs[tabIdx].no
    }
    clickTab(nextOpenedTabNo)
  } else {
    renderTabs()
  }
}

const createTab = (tab) => {
  return `
        <li class="${tab.opened ? state.markClassName : ''}">
          <a name="aTab" data-tab-no="${tab.no}">${tab.title}</a>
          <span name="spanTab" data-tab-no="${tab.no}">
            <img src="https://img.icons8.com/ios-glyphs/30/null/delete-sign.png"/>
          </span>
        </li>
        `
}

const createMoreTab = () => {
  return `
    <li>
      <a id="moreTab">...</a>
    </li>
  `
}

const renderTabs = () => {
  let html = ''
  if (state.tabs.length > state.tabsMaxLength) {
    const openedTabIdx = state.tabs.findIndex((t) => t.opened)
    if (openedTabIdx >= state.tabsMaxLength) {
      state.tabs = [
        state.tabs[openedTabIdx],
        ...state.tabs.filter((t) => !t.opened)
      ]
    }

    html = state.tabs
      .slice(0, state.tabsMaxLength)
      .map((t) => createTab(t))
      .join('')
      .concat(createMoreTab())
  } else {
    html = state.tabs.map((t) => createTab(t)).join('')
  }

  document.querySelector(state.tabsContainerSelector).innerHTML = html
}

const createIframe = (iframe, opened = false) => {
  return `
        <iframe
          id="tabIframe${iframe.no}"
          data-iframe-no="${iframe.no}"
          class="${opened ? '' : state.hideClassName}"
          src="${iframe.url}"
          title="${iframe.title}"
          width="${iframe.width}"
          height="${iframe.height}"
          frameBorder=${iframe.border}
          scrolling="auto"
        ></iframe>
        `
}

const renderIframes = () => {
  document.querySelector(state.iframeContainerSelector).innerHTML = state.tabs
    .map((i) => createIframe(i.iframe, i.opened))
    .join('')
}

const addTab = (tab) => {
  state.tabs = [tab, ...state.tabs]
}

const removeTab = (no) => {
  state.tabs = state.tabs.filter((t) => t.no !== no)
}

const markerTab = (no) => {
  state.tabs = state.tabs.map((t) => {
    t.opened = t.no === no ? true : false
    return t
  })
}

const addIframe = (iframe) => {
  document
    .querySelector(state.iframeContainerSelector)
    .insertAdjacentHTML('afterbegin', createIframe(iframe))
}

const removeIframe = (no) => {
  document.querySelector(`${state.iframeSelector}${no}`).remove()
}

const hideIframe = () => {
  document
    .querySelectorAll(state.iframeSelectorAll)
    .forEach((iframeSelector) => {
      iframeSelector.classList.add(state.hideClassName)
    })
}

const showIframe = (no) => {
  document
    .querySelector(`${state.iframeSelector}${no}`)
    .classList.remove(state.hideClassName)
}

const setTabsAtSessionStorage = () => {
  sessionStorage.setItem(
    state.tabsSessionStorageKey,
    JSON.stringify(state.tabs)
  )
}

const getTabsFromSessionStorage = () => {
  return JSON.parse(sessionStorage.getItem(state.tabsSessionStorageKey)) || []
}

export const init = () => {
  state.tabs = getTabsFromSessionStorage().map((st) =>
    Object.assign(new Tab(), st)
  )

  renderTabs()
  renderIframes()

  bind()
}

export const openTab = (menu) => {
  const tab = new Tab(menu.no, menu.name, menu.url, false)
  const isExist = state.tabs.map((t) => t.no).includes(tab.no)

  if (!isExist) {
    addTab(tab)
    addIframe(tab.iframe)
    setTabsAtSessionStorage()
  }

  clickTab(tab.no)
}

export const renewalTabUrl = (no, url) => {
  if (window.top === window) {
    state.tabs = state.tabs.map((t) => {
      if (t.no === Number(no)) {
        t.iframe.url = url
      }
      return t
    })

    setTabsAtSessionStorage()
  }
}
